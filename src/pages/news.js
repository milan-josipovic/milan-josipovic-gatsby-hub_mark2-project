import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import BlogList from "../components/Blog/BlogList"
const news = () => {
  return (
    <Layout>
      <BlogList />
    </Layout>
  )
}

export default news
