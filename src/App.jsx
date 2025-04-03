import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, PageLayout } from './components/layout'
import {
  HomeSidebar,
  ProductsSidebar,
  TrainingSidebar
} from './components/sidebars'
import {
  HomePage,
  ProductsPage,
  TrainingPage,
  MeetingPrepPage,
  CallAssistantPage,
  SDRAutomationPage,
  ViewComponents
} from './components/pages'

function App() {
  // Check for user's preferred color scheme
  useEffect(() => {
    // Check if user has already set a preference
    const darkModePreference = localStorage.getItem('darkMode')
    
    // If preference exists, apply it
    if (darkModePreference === 'true') {
      document.documentElement.classList.add('dark')
    } else if (darkModePreference === 'false') {
      document.documentElement.classList.remove('dark')
    } else {
      // If no preference, check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkMode', 'true')
      }
    }
  }, [])
  
  // Handle "Add New" button click
  const handleAddNewClick = () => {
    alert('Add New button clicked! You can implement your own functionality here.');
  }
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar showAddNewButton={true} onAddNewClick={handleAddNewClick} />
        <Routes>
          <Route path="/" element={
            <PageLayout sidebarContent={<HomeSidebar />}>
              <HomePage />
            </PageLayout>
          } />
          <Route path="/products" element={
            <PageLayout sidebarContent={<ProductsSidebar />}>
              <ProductsPage />
            </PageLayout>
          } />
          <Route path="/training" element={
            <PageLayout sidebarContent={<TrainingSidebar />}>
              <TrainingPage />
            </PageLayout>
          } />
          <Route path="/meeting-prep" element={
            <PageLayout sidebarContent={<HomeSidebar />}>
              <MeetingPrepPage />
            </PageLayout>
          } />
          <Route path="/call-assistant" element={
            <PageLayout sidebarContent={<HomeSidebar />}>
              <CallAssistantPage />
            </PageLayout>
          } />
          <Route path="/sdr-automation" element={
            <PageLayout sidebarContent={<HomeSidebar />}>
              <SDRAutomationPage />
            </PageLayout>
          } />
          <Route path="/view-components" element={
            <PageLayout sidebarContent={<HomeSidebar />}>
              <ViewComponents />
            </PageLayout>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
