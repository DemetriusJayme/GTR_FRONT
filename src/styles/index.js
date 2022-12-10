import styled from "styled-components";
import tw from "twin.macro";

const StyledForm = styled.main.attrs({
  className: "",
})`
  & {
    p {
      ${tw` text-sm text-gray-500`}
    }
    form {
    }
    label {
      ${tw`block text-sm font-medium text-gray-700 mb-1 mt-3`}
    }
    input {
      ${tw`focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
    }
    textarea {
      ${tw`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
    }
    fieldset {
      ${tw`mt-4`}
    }
    select {
      ${tw`mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
    }

    legend {
      ${tw`focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
    }
    span.url {
      ${tw`inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500`}
    }
    input[type="url"] {
      ${tw`block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
    }
    input[type="text"] {
      ${tw`m-0 mt-1 block w-full rounded-md border-gray-300 shadow-sm`}
    }
    input[type="email"] {
      ${tw`m-0 mt-1 block w-full rounded-md border-gray-300 shadow-sm`}
    }
    input[type="password"] {
      ${tw`m-0 mt-1 block w-full rounded-md border-gray-300 shadow-sm`}
    }
    input[type="file"] {
      ${tw`m-0 mt-1 block w-full rounded-md border-gray-300 shadow-sm`}
    }
    input [type="checkbox"] {
      ${tw`h-4 w-4 rounded border-gray-300 `}
    }
    input [type="radio"] {
      ${tw`h-4 w-4 border-gray-300 `}
    }
    .area-button {
      ${tw`bg-gray-50 px-4 py-3 text-right sm:px-6`}
    }
    button {
      ${tw`bg-dark-blue text-light-grey inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium  shadow-sm hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    }
  }
`;

const StyledSection = styled.main.attrs({
  className: "",
})`
  & {
    ${tw` space-y-6 bg-white px-4 py-5 sm:p-6 mb-2 shadow sm:overflow-hidden rounded-md `}
  }
`;

export { StyledForm, StyledSection };
