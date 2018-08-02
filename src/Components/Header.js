import { Box, Flex } from 'grid-styled'
import React from 'react'
import { Image } from '../Atoms/images'
import { HeaderContainer } from '../Atoms/layout'
import { StyledNavLink } from '../Atoms/links'

const Header = props => <HeaderContainer>
	<Flex mb={4} justify={'center'} align={'center'} p={2} wrap>
		<Box p={2} width={[1, 1 / 3, 1 / 5]}>
			<Image src={'logo'} alt='logo'/>
		</Box>
		<Box width={[1, 2 / 3, 4 / 5]}>
			<Flex wrap>
				<Box p={2}>
					<StyledNavLink to={'/'}>
						home
					</StyledNavLink>
				</Box>
				<Box p={2}>
					<StyledNavLink to={'/team'}>
						Team
					</StyledNavLink>
				</Box>
				<Box p={2}>
					<StyledNavLink to={'/events'}>
						Events
					</StyledNavLink>
				</Box>
			</Flex>
		</Box>
	</Flex>
</HeaderContainer>

export default Header