import React from 'react'
import Layout from '../components/Layout/Layout'
import Container from '../components/Grid/Container'
import Grid from '../components/Grid/Grid'
import SEO from '../components/SEO/SEO'

const index = () => {
  return (
    <Layout>
      <SEO />
      <Container>
        <Grid sm={1} md={2}>
          <div>
            <h3>Únete a la prueba beta</h3>
            <h1>
              Una app <span>positiva</span> para personas con VIH
            </h1>
          </div>
          <div>
            <h3>Únete a la prueba beta</h3>
            <h1>
              Una app <span>positiva</span> para personas con VIH
            </h1>
          </div>
        </Grid>
      </Container>
    </Layout>
  )
}

export default index
