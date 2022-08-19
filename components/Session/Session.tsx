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

// native imports
import SessionCard from './SessionCard';
import AddSession from './AddSession';

const Session = ({navigation} : any) => {

// modal state
const [openModal, setOpenModal] = useState(false)
const [form, setForm] = useState({
id: 0,
name: ""
})


const onSessionAdded = () => {
setSessions([...sessions, form])

setForm({
  name: "",
  id: Math.random()
})
}

// sessions state
const [sessions, setSessions] = useState([
{
  id: 1,
  name: "test 1"
},
{
  id: 2,
  name: "test 2"
}
])

return (
<View style={styles.sessionView}>
        <AddSession setSessions={setSessions} setOpenModal={setOpenModal}/>
        <ScrollView>
        {sessions.map(session => {
            return (
            <SessionCard {...session} key={session.id} navigation={navigation}/>
            )
        })}
        </ScrollView>

  <Modal
    animationType="slide"
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

modalContainer: {
flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
},

modalView: {
backgroundColor: 'black',
padding: 8
},

modalTitle: {
color: 'white',
fontSize: 20
},

modalText: {
color: 'white'
},

input: {
backgroundColor: 'white'
}
})