'use client'
import React, { useCallback, useState } from 'react'
import '../globals.css'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
