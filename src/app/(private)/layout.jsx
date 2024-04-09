'use client'
import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import '../globals.css'
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'

import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getParties } from '@/lib/queries/party/getParty'
import Sidebar from '@/components/Layouts/Sidebar'

const client = new QueryClient()

const PrivateLayout = ({ children }) => {

  return (
    <QueryClientProvider client={client}>
      {/* eslint-disable-next-line react/no-children-prop */}
      <Sidebar children={children} />
    </QueryClientProvider>
  )
}

export default PrivateLayout
