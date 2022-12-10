import styled from "styled-components";
import tw from "twin.macro";

const StyledForm = styled.main.attrs({
  className: "",
})`
  & {
    form {
      ${tw`bg-white rounded py-8 px-5 shadow `}
    }
    label {
      ${tw`block text-sm font-medium text-gray-700 mb-1 mt-1`}
    }
    input {
      ${tw`block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
    }
    input [type="file"] {
      background-color: red;
    }
    button {
      ${tw`inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    }
  }
`;
export default StyledForm;
