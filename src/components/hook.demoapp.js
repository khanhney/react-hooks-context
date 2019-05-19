import React, { useState, useContext } from 'react';
import { TextInput, Button, Table, toaster } from 'evergreen-ui';
import DemoContext, { DemoProvider, DemoConsumer } from '../contexts/demo.context';
import PassingInfoUserToInput, { PassInfoUserProvider } from '../contexts/passing-in-input-detail-student.context';

const ItemDetail = ({ username, email }) => {

    const [students, setStudents] = useContext(DemoContext);
    const [ infoStudent, setInfoStudent ] = useState({ username: username, email: email });

    const choiceForShowInfo = email => {
        let infoStudent = students.find(item => Object.is(email, item.email));
        console.log({ infoStudent })
    }

    return (
        <PassInfoUserProvider value={infoStudent}>
            <Table.Row key={email} isSelectable onSelect={() => choiceForShowInfo(email)}>
                <Table.TextCell>{username}</Table.TextCell>
                <Table.TextCell>{email}</Table.TextCell>
            </Table.Row>
        </PassInfoUserProvider>
    )
}

const FormAdd = ({ handleAddItem }) => {

    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleAddItemChild = e => {
        e.preventDefault();

        if (!username || !email) return toaster.danger(
            `Vui lòng nhập username và email`
          )

        handleAddItem({ username, email });
        emptyForm();
    }

    const emptyForm = () => {
        setUsername('');
        setEmail('');
    }

    return(
        <>
            <form onSubmit={handleAddItemChild}>
                <TextInput
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    placeholder={`username`}
                />

                <TextInput
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    placeholder={`email`}
                />

                <Button type='submit' height={32} appearance="primary" iconAfter="arrow-right">
                    Add Item
                </Button>
            </form>
        </>
    )
}

const HookApp = () => {
    const [ students, setStudents ] = useState([
        { username: 'KhanhNey', email: `khanhney.dev@gmail.con` },
        { username: 'LucDe', email: `lucdeit1997@gmail.con` },
        { username: 'ToDat', email: `todat1999@gmail.con` },
        { username: 'CanhNguyen', email: `nguye.tan.canh@gmail.con` },
        { username: 'VinhHuynh', email: `huynhVinhrinKy@gmail.con` },
        { username: 'VanThao', email: `vanthao31737@gmail.con` },
    ]);

    const handleAddItem = ({ username, email }) => {
        let newStudents = [...students, { username, email }];
        setStudents(newStudents);
    }

    const handleRemoveItem = email => {
        let newStudents = [...students];
        let indexForRemove = newStudents.findIndex(item => Object.is(item.email, email));
        newStudents.splice(indexForRemove, 1);
        setStudents(newStudents);
    }
  
    return (
        <>
            <DemoProvider value={[students, setStudents]}>
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>
                            {student.username} | {student.email}
                            <Button marginRight={16} appearance="minimal" intent="danger" onClick={() => handleRemoveItem(student.email)}>Remove...</Button>
                        </li>
                    ))}
                </ul>
                <hr></hr>
                <Table>
                    <Table.Head>
                        <Table.TextHeaderCell>
                            Username
                        </Table.TextHeaderCell>
                        <Table.TextHeaderCell>
                            Email
                        </Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body height={240}>
                        {students.map(student => (
                            <ItemDetail {...student} key={student.email}></ItemDetail>
                        ))}
                    </Table.Body>
                </Table>
                <hr></hr>
                <FormAdd handleAddItem={handleAddItem}></FormAdd>
            </DemoProvider>
        </>
    )
}

export default HookApp;