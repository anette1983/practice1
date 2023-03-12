import handleDate from 'components/utils/helpers';

import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

export const BlogCard = ({poster, tag, description, userName, avatar, postedAt, title}) => {
  return (
  <Card>
  <CardHeader>
    <CardPoster
      src= {poster}
      alt={userName}
    />
  </CardHeader>
  <CardBody>
    <Tag>{tag}</Tag>
    <CardTitle>{title}</CardTitle>
    <CardText>{description}</CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={avatar} alt={userName} />
      <UserInfo>
        <UserName>{userName}</UserName>
        <Date>{handleDate(postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>
  )
};
