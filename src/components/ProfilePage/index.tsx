import React from 'react';
import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Bruno Guimarães</h1>
            <h2>@bruno_cg</h2>

            <p>
                Desenvolvedor <a href='https://github.com/BrunoCezarGuimaraes'>Front-End</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Rio de Janeiro, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 11 de abril de 1998
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>81</strong>
                </span>
                <span>
                    <strong>371 </strong> seguidores
                </span>
            </Followage>

        </ProfileData>
        <Feed />

    </Container>
  );
}

export default ProfilePage;