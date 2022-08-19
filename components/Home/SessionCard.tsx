import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import BoulderCard from './BoulderCard'
import AddBoulder from './AddBoulder'

type BoulderProps = {
    grade: string,
    attempts: string
}

type SessionProps = {
    id: number,
    gym: string,
    date: string,
    boulders: BoulderProps[],
}

const SessionCard = ({gym, date, boulders} : SessionProps) => {
    const [openModal, setOpenModal] = useState(false)
    const [boulderList, setBoulderList] = useState(boulders)
    const [form, setForm] = useState({
        grade: "",
        attempts: ""
    })

    const onSessionAdded = () => {
        setBoulderList([...boulderList, form])
        console.log(boulderList)
    }

  return (
    <View style={styles.sessionCardView}>
      <Text style={styles.text}>{gym} {date}</Text>
      <AddBoulder setOpenModal={setOpenModal} />
      <Text style={styles.text}>Boulders:</Text>
      <View>
          {
            boulderList.map(boulder => {
                return (
                    <BoulderCard {...boulder} />
                )
            })
          }
      </View>

    <Modal
        animationType="fade"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
        setOpenModal(!openModal);
        }}
    > 
    <View style={styles.modalContainer}>
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>New Session</Text>
        <TextInput 
          value={form.grade}
          // onChange={(text) => onChange(text)}
          onChangeText={(text) => setForm({...form, grade: text})}
          style={styles.input}
          placeholder='grade'
        />

        <TextInput 
          value={form.attempts}
          // onChange={(text) => onChange(text)}
          onChangeText={(text) => setForm({...form, attempts: text})}
          style={styles.input}
          placeholder='attempts'
        />

        <TouchableOpacity 
          onPress={onSessionAdded}
        >
          <Text style={styles.modalText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setOpenModal(false)}
        >
          <Text style={styles.modalText}>Close Modal</Text>
        </TouchableOpacity>
      </View>
      </View>
    </Modal>
    </View>
  )
}

export default SessionCard

const styles = StyleSheet.create({
    text: {
        color: "white"
    },

    sessionCardView: {
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        minWidth: '80%',
        margin: 10,
        padding: 10,
        overflow: 'scroll'
      },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    modalView: {
        backgroundColor: '#DAE3E5',
        padding: 8
    },

    modalTitle: {
        color: 'black',
        fontSize: 20
    },

    modalText: {
        color: 'black'
    },

    input: {
        backgroundColor: 'black',
        color: 'white'
    }
})