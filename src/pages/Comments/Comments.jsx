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
              <div className="card-body">
                <p className="card-text">{comment.message}</p>
                <div className="card-footer">
                  <p className="card-info">
                    Usuario: {comment.owner.firstName}
                  </p>
                  <p className="card-info">Fecha: {comment.publishDate}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;
