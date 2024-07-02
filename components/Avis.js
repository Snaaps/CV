import React, { useState, useEffect } from "react";
import {View} from "react-native" ;
import styled from "styled-components";
import { Image } from 'expo-image';
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid"; // Importer uuid
import profilePicture from "../assets/pp.jpg";
import { FontAwesome } from "@expo/vector-icons";

const AvisContainer = styled.div`
  padding: 20px;
  background: #ecf0f1;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  width:auto;
  min-width:70vw;
`;

const TitledText = styled.h2`
  color: #6f2cf7 ;
`;
const GlobalRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const ProfileImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #6f2cf7;
  position: absolute;
  top: 130px;
  margin-right: 50px;
`;
const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewItem = styled.div`
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #bdc3c7;
`;

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};

const Avis = () => {
  const { t } = useTranslation();
  const [globalRating, setGlobalRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchGlobalRating();
    fetchReviews();
  }, []);

  const fetchGlobalRating = async () => {
    const response = await fetch("https://us-central1-mycv-e4c70.cloudfunctions.net/getGlobalRating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    setGlobalRating(data.globalRating);
    setReviewCount(data.reviewCount);
  };

  const fetchReviews = async () => {
    const response = await fetch("https://us-central1-mycv-e4c70.cloudfunctions.net/getReviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    setReviews(data.reviews);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const id = uuidv4(); // Générer un identifiant unique
    await fetch("https://us-central1-mycv-e4c70.cloudfunctions.net/submitReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name, surname, rating, comment })
    });
    fetchGlobalRating();
    fetchReviews();
    setName("");
    setSurname("");
    setRating(0);
    setComment("");
  };

  return (
    <AvisContainer>
      <TitledText>{t("feedback.title")}</TitledText>
      <GlobalRatingContainer>
        <ProfileImage
          style={{ width: 150, height: 150, borderRadius: '50%',marginRight:30, border: '2px solid #6f2cf7'}}
          source={profilePicture}
          contentFit="cover"
          transition={1000}
        />
        <div>
          <Stars>
            {[...Array(5)].map((star, index) => (
              <FontAwesome
                key={index}
                name={index < Math.round(globalRating) ? "star" : "star-o"}
                size={24}
                color="#f39c12"
              />
            ))}
          </Stars>
          <p>{reviewCount} {t("feedback.reviews")}</p>
        </div>
      </GlobalRatingContainer>
      <ReviewForm onSubmit={handleSubmitReview}>
        <Input
          type="text"
          placeholder={t("feedback.name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder={t("feedback.surname")}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <Stars>
          {[...Array(5)].map((star, index) => (
            <FontAwesome
              key={index}
              name={index < rating ? "star" : "star-o"}
              size={24}
              color="#f39c12"
              onClick={() => setRating(index + 1)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </Stars>
        <TextArea
          placeholder={t("feedback.comment")}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <Button type="submit">{t("feedback.submit")}</Button>
      </ReviewForm>
      <ReviewList>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <h4>{review.name} {review.surname}  </h4>
              
              <View style={{width:10}}></View>
              <p>  {formatDate(review.timestamp)}</p>
            </View>
            <Stars>
              {[...Array(5)].map((star, starIndex) => (
                <FontAwesome
                  key={starIndex}
                  name={starIndex < review.rating ? "star" : "star-o"}
                  size={16}
                  color="#f39c12"
                />
              ))}
            </Stars>
            <p>{review.comment}</p>
          </ReviewItem>
        ))}
      </ReviewList>
    </AvisContainer>
  );
};

export default Avis;
