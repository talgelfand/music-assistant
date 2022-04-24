import React, { useState, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { fetchData } from '../../utils/api'
import DataTable from '../DataTable'
import RangeGroup from '../RangeGroup'
import { DataModalProps } from './DataModal.types'
import LoadingSpinner from '../LoadingSpinner'

const DataModal: React.FC<DataModalProps> = ({
  trackId,
  artist,
  name,
  openCheck,
  closeEvent,
}) => {
  const [trackData, setTrackData] = useState({} as any)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrackData = async () => {
      const result = await fetchData(
        `https://api.spotify.com/v1/audio-features/${trackId}`
      )

      setTrackData(result)
      setLoading(false)
    }

    fetchTrackData()
  }, [])

  return (
    <Modal
      isOpen={openCheck}
      onClose={closeEvent}
      closeOnOverlayClick={true}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`${artist} - ${name}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <DataTable {...trackData} />
              <RangeGroup {...trackData} />
            </>
          )}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DataModal
