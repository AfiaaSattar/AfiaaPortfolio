const CardItem = styled.div`
  display: flex;
  gap: 10px;
  padding: 30px;
  margin-top: 20px;
  border-radius: 15px;

  border: 1px solid ${({ $color }) => `${$color}55`};

  background:
    radial-gradient(
      circle at 20% 20%,
      ${({ $color }) => `${$color}22`} 0%,
      transparent 60%
    ),
    rgba(15, 23, 42, 0.35);
      &:hover {
    transform: translateY(-4px);
    border-color: ${({ $color }) => $color};
    box-shadow: 0 0 20px ${({ $color }) => `${$color}40`};
  }
`