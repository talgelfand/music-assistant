import React, { useRef } from "react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react"
import * as Styled from "./Flyout.style"

export interface FlyoutProps {}

const Flyout: React.FC<FlyoutProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef() as any

  return (
    <>
      <Styled.FixedLeftButton ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open player
      </Styled.FixedLeftButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Flyout
