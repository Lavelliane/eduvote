'use client'
import { Form, Input, Button } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createParty } from '@/lib/queries/party/createParty';
import { useEffect } from 'react';
import { updateParty } from '@/lib/queries/mutations/party/updateParty';

const AddPartyForm = ({ handleModalClose, data, trigger }) => {
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: createParty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['parties'] });
    },
  });
  const { mutate: updateMutation } = useMutation({
    mutationFn: updateParty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['parties'] });
    },
  });

  const [partyForm] = Form.useForm();

  const onFinish = (values) => {
    if (trigger === 'edit') {
      updateMutation({ ...values, id: data.id });
      handleModalClose();
    } else {
      createMutation.mutate(values);
      handleModalClose();
    }
  };

  useEffect(() => {
    if (data && trigger === 'edit') {
      partyForm.setFieldsValue({
        name: data.name || '',
        vision: data.vision || '',
        mission: data.mission || '',
        goals: data.goals || '',
      });
    } else {
      partyForm.resetFields();
    }
  }, [data, partyForm]);

  return (
    <Form
      form={partyForm}
      name='party-form'
      onFinish={onFinish}
      style={{ maxWidth: '500px', margin: 'auto' }}
      requiredMark={false}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <Form.Item
        label={<span style={{ color: 'black' }}>Party Name</span>}
        name='name'
        rules={[{ message: 'Please input party name!' }]}
      >
        <Input style={{ borderRadius: '5px' }} />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: 'black' }}>Vision</span>}
        name='vision'
        rules={[{ required: true, message: 'Please input vision!' }]}
      >
        <Input.TextArea style={{ borderRadius: '5px' }} />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: 'black' }}>Mission</span>}
        name='mission'
        rules={[{ required: true, message: 'Please input mission!' }]}
      >
        <Input.TextArea style={{ borderRadius: '5px' }} />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: 'black' }}>Goals</span>}
        name='goals'
        rules={[{ required: true, message: 'Please input goals!' }]}
      >
        <Input.TextArea style={{ borderRadius: '5px' }} />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' style={{ width: '100%', borderRadius: '5px', backgroundColor: '#3DF07F', color: 'white' }}>
          {trigger === 'edit' ? 'Edit Party' : 'Create Party'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddPartyForm;

