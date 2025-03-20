const useState = React.useState 
const useEffect = React.useEffect 

const App = () => {
    const [showForm, setShowForm] = useState(true)
    const [words, setWords] = useState([]); 
    const [timeStamp, setTimeStamp] = useState(Date.now());

    useEffect(() => {
        const retrievedWords = data.words.getAll();
        setWords(retrievedWords);
    }, [timeStamp]); 


    const handleNavClick = () => {
        setShowForm(!showForm);
    }

    const handleSendNewWord = (newWordFormData) => {
        console.log(newWordFormData);
        const newWord = newWordFormData.word;
        data.words.addNew(newWord);
        setShowForm(!showForm);
        setTimeStamp(Date.now());
        setShowForm(false);
    
    }

    const handleDeleteWord = (wordIndex) => {
        data.words.deleteByIndex(wordIndex);
        setTimeStamp(Date.now()); 
    };
    

    return (<div className="main-container">
        <Btn
            className={'navigation-button'}
            btnCallback={handleNavClick}
            btnContent={showForm ? 'Ir a lista de palabras' : 'Añadir más palabras'}
        />
        {showForm ? (
                <Form
                    inputs={[
                        { type: 'text', placeholder: 'Nueva palabra', id: 'word', className: 'input' }
                    ]}
                    onsSubmitCallback={handleSendNewWord}
                    submitText="Guardar palabra"
                    className="form"
                />
            ) : (
                <List items={words} onItemClick={handleDeleteWord} />
            )}

    </div>);
}
