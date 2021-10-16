import styled from "@emotion/styled";

type LogoProps = {
  as?: "a" | "div";
};

const LogoStyle = styled.div`
  span {
    align-items: flex-end;
    display: inline-flex;

    p {
      margin: 0;
      line-height: 0.8;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .bold {
      font-size: 1.5rem;
    }
  }
`;

const Logo = ({ as }: LogoProps) => {
  return (
    <LogoStyle as={as}>
      <span>
        <p>TRY</p>
        <p className="bold">.CATCH.</p>
        <p>WTF</p>
      </span>
    </LogoStyle>
  );
};

Logo.defaultProps = {
  as: "div",
};

export default Logo;
