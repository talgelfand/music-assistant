import React from "react"
import DataTableProps from "./DataTable.types"
import * as Styled from "./DataTable.style"
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"

const DataTable: React.FC<DataTableProps> = ({
  danceability,
  energy,
  duration_ms,
  loudness,
  tempo,
}) => {
  return (
    <Styled.Table>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Feature</Th>
            <Th isNumeric>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Danceability</Td>
            <Td isNumeric>{danceability}</Td>
          </Tr>
          <Tr>
            <Td>Energy</Td>
            <Td isNumeric>{energy}</Td>
          </Tr>
          <Tr>
            <Td>Duration (min)</Td>
            <Td isNumeric>
              {`${Math.floor(duration_ms / 60000)}.${(
                (duration_ms % 60000) /
                1000
              ).toFixed(0)}`}
            </Td>
          </Tr>
          <Tr>
            <Td>Loudness (dB)</Td>
            <Td isNumeric>{loudness}</Td>
          </Tr>
          <Tr>
            <Td>Tempo (BPM)</Td>
            <Td isNumeric>{tempo}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Styled.Table>
  )
}

export default DataTable
