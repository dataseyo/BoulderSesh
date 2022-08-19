// external imports
import { StyleSheet, 
    Text, 
    View, 
    Modal, 
    TextInput, 
    TouchableOpacity,
    ScrollView
    } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// native imports
import SessionCard from './SessionCard';
import AddSession from './AddSession';

type BoulderProps = {
    grade: Number,
    attempts: Number,
    RPE: Number,
    name?: String
}

const Session = ({navigation} : any) => {

    // modal state
    const [openModal, setOpenModal] = useState(false)
    const [form, setForm] = useState({
        id: 0,
        name: "",
        boulders: [
            {
                grade: 0,
                attempts: 0,
                RPE: 0,
                name: ""
            }
        ]
    })


    const onSessionAdded = () => {
    setSessions([...sessions, form])

    setForm({
        name: "",
        id: Math.random(),
        boulders: [
            {
                grade: 0,
                attempts: 0,
                RPE: 0,
                name: ""
            }
        ]
    })}

// sessions state
const [sessions, setSessions] = useState([
    {
        id: 1,
        name: "test 1",
        boulders: [
            {
                grade: 0,
                attempts: 0,
                RPE: 0,
                name: ""
            }
        ]
    },
    {
        id: 2,
        name: "test 2",
        boulders: [
            {
                grade: 0,
                attempts: 0,
                RPE: 0,
                name: ""
            }
        ]
    }
])

return (
<View style={styles.sessionView}>
        <AddSession setOpenModal={setOpenModal}/>
        <ScrollView style={styles.scroll}>
        {sessions.map(session => {
            return (
            <SessionCard {...session} key={session.id} navigation={navigation}/>
            )
        })}
        </ScrollView>

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
          value={form.name}
          // onChange={(text) => onChange(text)}
          onChangeText={(text) => setForm({...form, name: text})}
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

export default Session

const styles = StyleSheet.create({
    sessionView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    scroll: {
        width: '100%',
        height: '100%'
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