import Heading from "@components/Heading";
import LinkIcon from "@components/icons/LinkIcon";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import useInView from "@hooks/useInView";
import { ColorShade } from "@typings/styled";
import { useAnimation } from "framer-motion";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";
import { useEffect } from "react";
import styled from "styled-components";

const BlogAnchorHeadingStyled = styled.a`
  position: relative;
  text-decoration: none;
  scroll-margin-top: 5rem;

  div {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

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

type BlogHeadingProps = {
  children: ReactNode;
};

const BlogHeading = ({ children }: BlogHeadingProps) => {
  const controls = useAnimation();
  const { containerRef, isVisible } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [controls, isVisible]);

  return (
    <BlogAnchorHeadingStyled
      ref={containerRef}
      id={(children as string).toLowerCase().replaceAll(" ", "-")}
      href={`#${(children as string).toLowerCase().replaceAll(" ", "-")}`}
    >
      <Heading
        fgColor={useAppThemeValue<ColorShade>("yellow.400", "yellow.400")}
        fontWeight={500}
        fontSize={"1.75rem"}
        margin={"0"}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
          },
        }}
        transition={{ duration: 0.4 }}
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
