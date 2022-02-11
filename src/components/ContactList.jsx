function ContactList(props) {
    const contactList = props.data.map((contact, i) => <li key={i}> {contact} </li>);
    return <ul>{contactList}</ul>;
}

export default ContactList;