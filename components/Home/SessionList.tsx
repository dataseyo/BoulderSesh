import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

import SessionCard from './SessionCard'
import AddSession from './AddSession'

type Props = {}

const SessionList = (props: Props) => {
    // modal state
    const [openModal, setOpenModal] = useState(false)

    const [form, setForm] = useState({
        id: Math.random(),
        gym: "",
        date: "",
        boulders: []
    })


    const onSessionAdded = () => {
        setSessions([...sessions, form])

        setForm({
            id: Math.random(),
            gym: "",
            date: "",
            boulders: []
        })
    }

    // sessions state
    const [sessions, setSessions] = useState([
        {
            id: Math.random(),
            gym: "blue swan",
            date: "today",
            boulders: [
                {
                    grade: "1",
                    attempts: "1"
                }
            ]
        }
    ])

  return (
    <View style={styles.sessionListView}>
      <Text>SessionList</Text>
      <AddSession setOpenModal={setOpenModal}/>
      <View>
          {
              sessions.map(session => {
                  return (
                      <SessionCard {...session}/>
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
                    value={form.gym}
                    // onChange={(text) => onChange(text)}
                    onChangeText={(text) => setForm({...form, gym: text})}
                    style={styles.input}
                    placeholder='name'
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

export default SessionList

const styles = StyleSheet.create({
    sessionListView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: "white"
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