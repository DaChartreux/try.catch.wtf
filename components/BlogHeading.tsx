import Heading from "@components/Heading";
import LinkIcon from "@components/icons/LinkIcon";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import { ColorShade } from "@typings/styled";
import styled from "styled-components";

const BlogAnchorHeadingStyled = styled.a`
  position: relative;
  text-decoration: none;
  scroll-margin-top: 5rem;

  &:hover {
    div {
      opacity: 1;
    }
  }
`;

const BlogAnchorIcon = styled.div`
  position: absolute;
  right: 10px;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const BlogHeading = ({ children, ...props }: any) => {
  return (
    <BlogAnchorHeadingStyled
      id={(children as string).toLowerCase().replaceAll(" ", "-")}
      href={`#${(children as string).toLowerCase().replaceAll(" ", "-")}`}
    >
      <Heading
        fgColor={useAppThemeValue<ColorShade>("yellow.400", "yellow.400")}
        fontWeight={500}
        fontSize={"1.75rem"}
      >
        <BlogAnchorIcon>
          <LinkIcon />
        </BlogAnchorIcon>
        {children}
      </Heading>
    </BlogAnchorHeadingStyled>
  );
};

export default BlogHeading;
