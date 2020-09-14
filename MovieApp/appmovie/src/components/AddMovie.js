import React, { useState } from 'react'
import Modal from 'react-modal'
import { f067 } from 'react-icons/fa'
function AddMovie({ add }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [inputNom, setInputNom] = useState("")
    const [inputDe, setInputDe] = useState("")
    const [inputSortie, setInputSortie] = useState("")
    const [inputUrl, setInputUrl] = useState("")
    return (
        <div className="cartAdd">
            <p className="buttonAdd">
                <i className="fa fa-plus-square" onClick={() => setModalIsOpen(true)} /> </p>

            <Modal isOpen={modalIsOpen} className="modalAdd">


                <label className="titreAddMovie">Add Movie</label>
                
                <div className="ajouter">
                    
                          <div className="inputTitre">
                              <label className="titre">Titre :</label>
                              <input type="text" onChange={(e) => setInputNom(e.target.value)} />
                         </div>

                        <div className="inputDe">
                           <label>DE :</label>
                           <input type="text" onChange={(e) => setInputDe(e.target.value)} />
                        </div>

                        <div>
                            <label>Sortie :</label>
                            <input type="text" value={inputSortie} onChange={(e) => setInputSortie(e.target.value)} />
                       </div>

                       <div>
                        <label>Image :</label>
                        <input type="text" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} />
                       </div>
             </div>
               
                <div>

                    <button onClick={(e) => { add(inputNom, inputDe, inputSortie, inputUrl) }}>Save</button>
                    <button onClick={() => setModalIsOpen(false)}>Cancel</button>
                </div>

            </Modal>
        </div>
    )
}

export default AddMovie
