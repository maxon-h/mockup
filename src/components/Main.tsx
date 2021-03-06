import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    padding-top: 50px;
    align-items: center;
`;

const Div = styled.div`
    width: 90%;
    min-height: 100px;
    font-size: 18px;
`;

const MainTitle = styled(Div)`
    text-align: center;
    font-size: 30px;
`;

const Input = styled.input`
    margin-right: 7px;
    font-size: 18px;
`;

const Label = styled.label`
    font-size: 18px;
    padding: 15px 0;
`;

const FormWrapper = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Button = styled.button`
    width: 170px;
    height: 50px;
    background-color: ${props => props.theme.buttonColor};
    vertical-align: middle;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.blackColor};
    margin: 0 auto;
    margin-top: 50px;
    cursor: pointer;
    :active{
        background-color: ${props => props.theme.buttonActiveColor};
        color: ${props => props.theme.blackColor};
    }
`;

const candidates: string[] = ['Candidate #1', 'Candidate #2'];

interface IRadioButton {
  name: string;
  change(event: React.ChangeEvent): void;
}

const RadioItem: React.FC<IRadioButton> = (props) => {
  return (
    <Label>
        <Input type="radio" name="candidate" value={props.name} onChange={props.change}/>
        {props.name}
    </Label>
  );
};

interface IFormProps { 
  changedAppName: (changedName: string) => void;
}

interface IFormState {
  value: string;
}

class Form extends React.Component<IFormProps, IFormState> {
  state: IFormState;
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      value: 'You have not chosen candidates',
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleRadioChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    this.props.changedAppName(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleButtonClick(): void {
    alert(this.state.value);
  }

  render() {
    const listOfCandidates = candidates.map(candidate => 
                <RadioItem name={candidate} key={candidate} change={this.handleRadioChange}/>
            );
    return (
            <FormWrapper>
                {listOfCandidates}
                <Button type="button" onClick={this.handleButtonClick}>Vote</Button>
            </FormWrapper>
    );
  }
}

interface IMainProps {
  changeHandler: (changedName: string) => void;
}

const Main: React.FC<IMainProps> = (props) => {
  return (
        <Wrapper>
            <MainTitle>Let's vote</MainTitle>
            <Div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore.
            </Div>
            <Form changedAppName={props.changeHandler}/>
        </Wrapper>
  );
};

export default Main;
