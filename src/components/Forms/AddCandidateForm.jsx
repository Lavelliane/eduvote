import { positions, yearLevels } from '@/constants'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCandidate, updateCandidate } from '@/lib/mutations/candidate/candidateMutations'
import { useEffect, useState } from 'react'
import { omit } from 'lodash'
import { PlusOutlined } from '@ant-design/icons'
import { Image, Upload } from 'antd'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(`${process.env.NEXT_PUBLIC_SUPABASE_DOMAIN}`, `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`)

function AddCandidateForm({ handleFormClose, partyId, candidateData, trigger }) {
  const queryClient = useQueryClient()
  const [fileList, setFileList] = useState([])
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [filename, setFileName] = useState('')
  const [createdOrUpdatedCandidate, setCreatedOrUpdatedCandidate] = useState(null)
  const {
    mutate: createCandidateMutation,
    data: createdCandidate,
    isSuccess
  } = useMutation({
    mutationFn: createCandidate,
    onSuccess: (response) => {
      // Invalidate and refetch
      setCreatedOrUpdatedCandidate(response.candidate)
      queryClient.invalidateQueries({ queryKey: ['candidates'] })
    }
  })

  const { mutate: updateCandidateMutation, isSuccess: updateSuccess } = useMutation({
    mutationFn: updateCandidate,
    onSuccess: (response) => {
      // Invalidate and refetch
      setCreatedOrUpdatedCandidate(response.candidate)
      queryClient.invalidateQueries({ queryKey: ['candidates'] })
    }
  })

  const { mutate: updateCandidateImage, isSuccess: updateImageSuccess } = useMutation({
    mutationFn: updateCandidate,
    onSuccess: (response) => {
      // Invalidate and refetch
      console.log('Candidate image uploaded')
    }
  })

  const [candidateForm] = useForm()

  useEffect(() => {
    if (candidateData && trigger === 'edit') {
      //omit img_url for now
      candidateForm.setFieldsValue(candidateData)
      setPreviewImage(candidateData.img_url)
    } else {
      candidateForm.resetFields()
    }
  }, [candidateData, candidateForm])

  async function uploadImage(id) {
    // const fileToUpload = await getBase64(fileList[0].originFileObj)
    try{
      const { data, error } = await supabase.storage.from('avatars').upload(`${id}/avatar`, fileList[0].originFileObj, {
        cacheControl: '3600',
        upsert: true
      })
      console.log('UPLOAD DATA',data)
      console.log('PATH', `${id}/avatar`)
      const { data: url } = supabase.storage.from('avatars').getPublicUrl(`${id}/avatar`)
      console.log(url.publicUrl)
      await updateCandidateImage({ img_url: url.publicUrl, id })
    }catch (e) {
      console.error(e)
    }

  }

  useEffect(() => {
    if (isSuccess || updateSuccess) {
      console.log('SUCCESS UPDATE')
      uploadImage(createdOrUpdatedCandidate.id).then((res) => {
        if (res) {
          console.log('Candidate created successfully')
        }
      })
    }
  }, [isSuccess, updateSuccess])
  const handleSubmit = async (values) => {
    if (trigger === 'create') {
      createCandidateMutation({ ...values, filename, party_id: partyId })
    } else {
      updateCandidateMutation({ ...values, filename, id: candidateData.id })
    }
    handleFormClose()
  }

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    // if(file.status === "done"){
    //   setFileName(file.name.replaceAll(" ", "_"))
    // }
  }
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
  }

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none'
      }}
      type='button'
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8
        }}
      >
        Upload
      </div>
    </button>
  )

  useEffect(() => {
    console.log(fileList)
  }, [fileList])

  return (
    <Form
      name='candidate-form'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete='off'
      form={candidateForm}
      onFinish={handleSubmit}
      requiredMark={false}
      layout = 'vertical'
    >
      <Form.Item name='name' label='Name' rules={[{ required: true, message: 'Please enter name' }]}>
        <Input />
      </Form.Item>

      <Form.Item name='position' label='Position' rules={[{ required: true, message: 'Please select year level' }]}>
        <Select options={positions} />
      </Form.Item>

      <Form.Item name='year' label='Year Level' rules={[{ required: true, message: 'Please select year level' }]}>
        <Select options={yearLevels} />
      </Form.Item>

      <Form.Item name='course' label='Course' rules={[{ required: true, message: 'Please enter the advocacy' }]}>
        <Input />
      </Form.Item>

      <Form.Item
  name='age'
  label='Age'
  rules={[
    { required: true, message: 'Please input age' },
    { type: 'number', min: 18, message: 'Age must be at least 18' },
    { type: 'number', max: 30, message: 'Age must be at most 30' }
  ]}
>
  <InputNumber />
</Form.Item>


      <Form.Item
        name='credentials'
        label='Credential'
        rules={[{ required: true, message: 'Please enter the advocacy' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item name='advocacy' label='Advocacy' rules={[{ required: true, message: 'Please enter the advocacy' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name='img_url'>
        <Upload
          listType='picture-circle'
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          accept='image/png, image/jpeg'
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{
              display: 'none'
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage('')
            }}
            src={previewImage}
          />
        )}
      </Form.Item>
      <Button htmlType='submit' type='primary' style={{ color: 'white' }} >
        {trigger === 'create' ? 'Add Candidate' : 'Update Candidate'}
      </Button>
    </Form>
  )
}

export default AddCandidateForm

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
