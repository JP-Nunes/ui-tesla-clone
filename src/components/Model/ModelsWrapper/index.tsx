import React, { useCallback, useRef, useState } from 'react'

import ModelsContext, { CarModel } from '../ModelsContext'

import { Container } from './styles'

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    const filteredModels = registeredModels.filter(registeredModel => (
      registeredModel.modelName !== modelName
    ))

    setRegisteredModels(filteredModels)
  }, [])

  const getModelByName = useCallback((modelName: string) => {
    const foundModel = registeredModels.find(
      registeredModel => registeredModel.modelName === modelName
    )

    return foundModel ? foundModel : null
  }, [])

  return (
    <ModelsContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName,
    }}>
      <Container ref={wrapperRef}>{children}</Container>
    </ModelsContext.Provider>
  )
}

export default ModelsWrapper