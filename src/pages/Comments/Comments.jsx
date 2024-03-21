import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentsByPostId } from '../../services/api';

import './styles.css';

function Comments() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await fetchCommentsByPostId(postId);
        console.log('Comentarios recuperados:', fetchedComments);

        setComments(fetchedComments.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="comments-container">
      <h1 className="post-title">Comentarios del post {postId}</h1>
      <div className="comments-list">
        {comments.length === 0 ? (
          <div className="no-comments-card">
            <p>No hay comentarios</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div className="comment-card" key={comment.id}>
              <div className="comment-content">
                <p className="comment-message">{comment.message}</p>
                <p className="comment-info">
                  <strong>Usuario: </strong>
                  {comment.owner.firstName}
                  <span>
                    <strong>Fecha:</strong> {comment.publishDate}
                  </span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;
