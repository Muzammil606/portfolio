"use client";
import { ThemeProvider } from 'next-themes'
import React, { useState, useEffect } from 'react'

const Provider = ({children}) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
      setMounted(true)
  }, [])

  if (!mounted) {
      return null
  }
  return (
    <ThemeProvider attribute='class' enableSystem>{children}</ThemeProvider>
  )
}

export default Provider