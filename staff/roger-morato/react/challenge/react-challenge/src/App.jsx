const useState = React.useState 
const useEffect = React.useEffect 

const App = () => {
    const [showForm, setShowForm] = useState(true)
    const [words, setWords] = useState([]); 
    /* Añado useState para numbers */
    const [showNumberForm, setShowNumberForm] = useState(true);
    const [numbers, setNumbers] = useState([]);
    /* El timeStamp es común a ambos */
    const [timeStamp, setTimeStamp] = useState(Date.now());

    useEffect(() => {
        const retrievedWords = data.words.getAll();
        setWords(retrievedWords);
    }, [timeStamp]); 

    /* useEffect que actualiza numbers */
    useEffect(() => {
        const retrievedNumbers = data.numbers.getAll();
        setNumbers(retrievedNumbers);
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

    // Handlers para numbers
    const handleToggleNumberForm = () => {
        setShowNumberForm(!showNumberForm);
    };

    const handleSendNewNumber = (newNumberFormData) => {
        const newNumber = newNumberFormData.number;
        data.numbers.addNew(newNumber);
        setTimeStamp(Date.now());
        setShowNumberForm(false);
    };

    const handleDeleteNumber = (numberIndex) => {
        data.numbers.deleteByIndex(numberIndex);
        setTimeStamp(Date.now());
    };
    

    return (
        <div className="main-container">
            {/* Sección para words */}
            <div className="words-section">
                <Btn
                    className="navigation-button"
                    btnCallback={handleNavClick}
                    btnContent={showForm ? 'Ir a lista de palabras' : 'Añadir más palabras'}
                />
                {showForm ? (
                    <Form
                        inputs={[
                            {
                                type: 'text',
                                placeholder: 'Nueva palabra',
                                id: 'word',
                                className: 'input'
                            }
                        ]}
                        onsSubmitCallback={handleSendNewWord}
                        submitText="Guardar palabra"
                        className="form"
                    />
                ) : (
                    <List items={words} onItemClick={handleDeleteWord} />
                )}
            </div>

            {/* Sección para numbers */}
            <div className="numbers-section">
                <Btn
                    className="navigation-button"
                    btnCallback={handleToggleNumberForm}
                    btnContent={showNumberForm ? 'Ir a lista de números' : 'Añadir más números'}
                />
                {showNumberForm ? (
                    <Form
                        inputs={[
                            {
                                type: 'text',
                                placeholder: 'Nuevo número',
                                id: 'number',
                                className: 'input'
                            }
                        ]}
                        onsSubmitCallback={handleSendNewNumber}
                        submitText="Guardar número"
                        className="form"
                    />
                ) : (
                    <List items={numbers} onItemClick={handleDeleteNumber} />
                )}
            </div>
        </div>
    );
};
