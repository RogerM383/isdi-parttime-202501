const useState = React.useState //Nos traemos el hook useState de react
const useEffect = React.useEffect //Nos traemos el hook useEffect de react

const App = () => {
    const [showForm, setShowForm] = useState(true)
    const [words, setWords] = useState([]); 
    const [timeStamp, setTimeStamp] = useState(Date.now());

    /*PASO 7: añade un estado llamado timeStamp cuyo valor por defecto sea Date.now()*/
    useEffect(() => {
        const retrievedWords = data.words.getAll();
        setWords(retrievedWords);
    }, [timeStamp]); 
    
    /*PASO 7: añade el timeStamp al array de dependencias del useEffect*/

    const handleNavClick = () => {
        setShowForm(!showForm);
        /*PASO 7: cambia el valor del timeStamp para asegurarte que se actualiza el array de words cuando se navegue a la vista correspondiente*/
    }

    const handleSendNewWord = (newWordFormData) => {
        console.log(newWordFormData);
        const newWord = newWordFormData.word;
        data.words.addNew(newWord);
        setShowForm(!showForm);
        setTimeStamp(Date.now());
        setShowForm(false);
    
        /*PASO 7: cambia el valor del timeStamp para asegurarte que se actualiza el array de words*/
    }

    const handleDeleteWord = (wordIndex) => {
        data.words.deleteByIndex(wordIndex);
        setTimeStamp(Date.now()); 
    };
    

    return (<div className="main-container">
        <Btn
            className={'navigation-button'}
            btnCallback={handleNavClick}
            btnContent={showForm ? 'Ir a lista de palabras' : 'Añadir más palabras' /*PASO 2: fijate que aquí ya hay un condicional en base a showForm. Si el texto del botón cambia cuando haces click, es que has implementado bien el código dentro de handleNavClick*/}
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
