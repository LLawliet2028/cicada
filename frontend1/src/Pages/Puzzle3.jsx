import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Puzzle3 = () => {
  const [currentQuiz, setCurrentQuiz] = useState(1); // Current Quiz number
  const [quiz1Answer, setQuiz1Answer] = useState('');
  const [quiz2Answer, setQuiz2Answer] = useState('');
  const [quiz1Completed, setQuiz1Completed] = useState(false);
  const navigate = useNavigate();

  const quiz1Hints = {
    1: "Clue: Think of a renowned Roman general who was famous not just for his conquests but also for his secretive way of communicating. To unlock this message, you must step back into the past and retrace his steps through the alphabet, moving each letter back by the same number of places that his name rhymes with.",
  };

  const checkQuiz1Answer = () => {
    if (
      quiz1Answer.trim().toLowerCase() ===
      'rospinot tech fest ignites robotics innovation and growth'
    ) {
      toast.success('Correct! You can proceed to Quiz 2.');
      setQuiz1Completed(true);
      setQuiz1Answer('');
    } else {
      toast.error('Incorrect answer. Try again!');
    }
  };



  const handlePuzzleCompletion = async () => {
    // When the user completes the final step (Step 7), send the API request

    const token = localStorage.getItem('jwt'); // Get the JWT token from localStorage

    if (!token) {
      toast.error("No authentication token found. Please log in again.");
      return;
    }

    try {
      // Send a request to the backend to notify that the puzzle is completed
      const response = await axios.post(
        'http://localhost:3000/api/team/updateCount', // Replace with your actual API endpoint
        { isCorrect: true }, // You can send any necessary data with the request
        {
          headers: {
            authorization: `Bearer ${token}` // Include the JWT token in the Authorization header
          }
        }
      );
      navigate('/puzzle/4')
      // If the request is successful, show a success message
      toast.success("Puzzle completed successfully! You are a champion!");

    } catch (error) {
      console.error('Error completing puzzle:', error);
      toast.error("There was an error completing the puzzle. Please try again.");
    }
  };




  const checkQuiz2Answer = () => {
    if (quiz2Answer.trim().toLowerCase() === 'nichirin blade') {
      toast.success('Correct answer! You have completed both quizzes.');
      setQuiz2Answer('');
      handlePuzzleCompletion();
    } else {
      toast.error('Oops, try another QR code!');
    }
  };

  useEffect(() => {
    const checkPuzzleNumber = async () => {
      try {
        const token = localStorage.getItem('jwt');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get(
          'http://localhost:3000/api/team/getcount',
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        const currentPath = window.location.pathname;
        const puzzleNumber = currentPath.split('/')[2];
        const count = response.data.correctCount + 1;

        if (puzzleNumber != count.toString()) {
          navigate('/puzzle-journey');
        }
      } catch (error) {
        console.error('Error fetching correct count:', error);
        navigate('/login');
      }
    };

    checkPuzzleNumber();
  }, [navigate]);

  return (
    <div
      style={{
        backgroundColor: '#1c1c1c',
        color: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'monospace',
        textAlign: 'center',
        padding: '20px',
        gap: '20px',
      }}
    >
      <h1 style={{ color: '#00ff00' }}>Puzzle Challenge</h1>

      {/* Navigation for Quiz 1 and Quiz 2 */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          onClick={() => setCurrentQuiz(1)}
          style={{
            padding: '10px 20px',
            backgroundColor: currentQuiz === 1 ? '#00ff00' : '#333',
            color: currentQuiz === 1 ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Quiz 1
        </button>
        <button
          onClick={() => setCurrentQuiz(2)}
          disabled={!quiz1Completed} // Disable if Quiz 1 is not completed
          style={{
            padding: '10px 20px',
            backgroundColor: currentQuiz === 2 ? '#00ff00' : '#333',
            color: currentQuiz === 2 ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: quiz1Completed ? 'pointer' : 'not-allowed',
            fontWeight: 'bold',
          }}
        >
          {quiz1Completed ? 'Quiz 2' : 'Quiz 2 🔒'}
        </button>
      </div>

      {/* Quiz 1 */}
      {currentQuiz === 1 && (
        <div>
          <div
            style={{
              backgroundColor: '#2a2a2a',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '600px',
              width: '100%',
            }}
          >
            <p>
              Ciphered Message: "Tqurkpqv vgjv hguv kipvkgu tqdqvkue kpqxvkevcp
              cpf itqyvj"
            </p>
            <p style={{ color: '#00ff00', fontSize: '0.9em' }}>
              {quiz1Hints[1]}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="text"
              placeholder="Enter answer"
              value={quiz1Answer}
              onChange={(e) => setQuiz1Answer(e.target.value)}
              style={{
                padding: '10px',
                backgroundColor: '#333',
                color: '#fff',
                border: '1px solid #00ff00',
                borderRadius: '4px',
                width: '300px',
              }}
            />
            <button
              onClick={checkQuiz1Answer}
              style={{
                padding: '10px 20px',
                backgroundColor: '#00ff00',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Quiz 2 */}
      {currentQuiz === 2 && (
        <div>
          <p style={{ color: '#00ff00', marginBottom: '20px' }}>
            Please enter your answer:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="text"
              placeholder="Enter answer"
              value={quiz2Answer}
              onChange={(e) => setQuiz2Answer(e.target.value)}
              style={{
                padding: '10px',
                backgroundColor: '#333',
                color: '#fff',
                border: '1px solid #00ff00',
                borderRadius: '4px',
                width: '300px',
              }}
            />
            <button
              onClick={checkQuiz2Answer}
              style={{
                padding: '10px 20px',
                backgroundColor: '#00ff00',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default Puzzle3;
