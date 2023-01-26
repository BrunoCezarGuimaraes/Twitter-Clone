import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder='Buscar no Twitter' />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>

                <Body>
                    <List
                        title='Talves você curta'
                        elements={[
                            <FollowSuggestion
                                name="Darth Vader"
                                nickname="@iamyourfather"
                            />,
                            <FollowSuggestion
                                name="Patolino"
                                nickname="@magoimplacavel"
                            />,
                            <FollowSuggestion
                                name="Batman"
                                nickname="@batrich"
                            />
                        ]}
                    />
                    <List
                        title='Talves você curta'
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    );
}

export default SideBar;