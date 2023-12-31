import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
        title="Model S"
        description="Order Online for Touchless Deliver"
        backgroundImg="model-s.jpg"
        leftBtnText="Customorder"
        rightBtnText="Existinginventory"/>
        
        <Section  
        title="Model Y"
        description="Order Online for Touchless Deliver"
        backgroundImg="model-y.jpg"
        leftBtnText="Customorder"
        rightBtnText="Existinginventory"/>
        
        <Section  
        title="Model 3"
        description="Order Online for Touchless Deliver"
        backgroundImg="model-3.jpg"
        leftBtnText="Customorder"
        rightBtnText="Existinginventory"/>
  
    
        <Section  
        title="Model x"
        description="Order Online for Touchless Deliver"
        backgroundImg="model-x.jpg"
        leftBtnText="Customorder"
        rightBtnText="Existinginventory"/>
        
        <Section  
        title="Lowest Cost Solar Panels in America"
        description=" Money - back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"/>
      <Section  
        title="Solar for New Roofs"
        description=" Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"/>

      <Section  
        title="Accessories"
        description=" "
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh;
`