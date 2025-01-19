import { useState } from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousel from "../components/Carousel";
import fetchPet from "../helper/fetchPet";
import Modal from "../components/Modal";
const Details = () => {
    const { id } = useParams()
    const results = useQuery([id], fetchPet)
    const [showModal, setShowModal] = useState(false);

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }
    const pet = results.data.pets[0];
    console.log('results', results)
    console.log('pet', pet)

    const handleModal = () => {
        setShowModal(true)
    }
    return (
        <div className="details">
            <div>
                <Carousel images={pet.images} />
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                <button onClick={handleModal}>Adopt {pet.name}</button>
                <p>{pet.description}</p>
            </div>

            {
                showModal === true ? (
                    <Modal>
                        <div>
                            <h1>Would you like to adopt {pet.name}?</h1>
                            <div className="buttons">
                                <button>Yes</button>
                                <button onClick={() => setShowModal(false)}>No</button>
                            </div>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );
};

export default Details;