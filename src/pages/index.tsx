import React from 'react'

import DefaultOverlayContent from '../components/DefaultOverlayContent'
import { ModelsWrapper, ModelSection  } from '../components/Model'

import { Container } from '../../styles/index'

const Home: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
          
        </div>
      </ModelsWrapper>
    </Container>
  )
}

export default Home
