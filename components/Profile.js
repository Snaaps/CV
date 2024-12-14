import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';
import { FontAwesome } from '@expo/vector-icons'; // Assurez-vous d'avoir installé ce paquet
import profilePicture from '../assets/pp.jpg'; 
import bannerImage from '../assets/bg.jpg'; 

function getAspectRatio(image) {
  const height = image.naturalHeight;
  const width = image.naturalWidth;

  const gcd = (...arr) => {
      const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
      return [...arr].reduce((a, b) => _gcd(a, b));
  };

  const gcdResult = gcd(width, height);

  return `${width / gcdResult}:${height / gcdResult}`;
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BannerImage = styled(Image)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const ProfileImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #6f2cf7;
  position: absolute;
  top: 130px;
`;

const ProfileDetails = styled.div`
  padding: 20px;
`;

const TitledText = styled.h2`
  color: #6f2cf7;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  flex-direction : column;
  right: 20px;
  bottom:45px;
`;

const DownloadableCVContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  position: absolute;
  flex-direction : row;
  right: 20px;
  top:45px;
`;
const SocialButton = styled.a`
  color: white;
  margin: 0 10px;
  font-size: 24px;
  background-color: white;
  border: 1px solid white;
  border-radius:50%;
  margin:5px;
  padding:5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: #6f2cf7;
  }
`;
const DownloadButton = styled.a`
  color: white;
  font-size: 24px;
  background-color: white;
  border: 1px solid white;
  border-radius:50%;
  margin:5px;
  padding:5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: #6f2cf7;
  }
`;

const DownloadText = styled.span`
  font-size: 16px;
  margin-right: 10px;
  color: white;
`;

const Profile = () => {
  const { t } = useTranslation();

  return (
    <ProfileContainer>
      <View style={{width: '100%', height: '45vh', backgroundColor:'black',justifyContent:'center',alignItems:'center',overflow:'hidden'}}>
        <BannerImage
          style={{  width:'fit-content',maxWidth: '100%',height:'100%', borderRadius: '8px 8px 0 0' , aspectRatio : 10/5}}
          source={bannerImage}
          transition={1000}
        />
        <ProfileImage
          style={{ width: 150, height: 150, borderRadius: '50%',position:'absolute',bottom:50,left:30, border: '2px solid #6f2cf7'}}
          source={profilePicture}
          contentFit="cover"
          transition={1000}
        />
        <DownloadableCVContainer>
          <DownloadText>{t('cv.download')}</DownloadText>
          <DownloadButton href="/path-to-your-cv/CV.pdf" target="_blank" rel="noopener noreferrer">
            <FontAwesome name="download" />
          </DownloadButton>
        </DownloadableCVContainer>
        <SocialMediaContainer>
          <SocialButton href="https://www.instagram.com/p/C5kxV0tqLaf/?next=%2F" target="_blank">
            <FontAwesome name="instagram" />
          </SocialButton>
          <SocialButton href="https://m.facebook.com/luc.bonnet1/" target="_blank">
            <FontAwesome name="facebook" />
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/luc-arnaud-bonnet-47b5921b8/" target="_blank">
            <FontAwesome name="linkedin" />
          </SocialButton>
          <SocialButton href="mailto:luc.bonnet.13@gmail.com">
            <FontAwesome name="envelope" />
          </SocialButton>
        </SocialMediaContainer>
      </View>
      <ProfileDetails>
        <TitledText>{t('profile.title')}</TitledText>
        <p dangerouslySetInnerHTML={{ __html: t('profile.description') }}></p>
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default Profile;
