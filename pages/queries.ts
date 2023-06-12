import { gql } from '@apollo/client';

export const GET_INTERNS = gql `
    query GetInternsDetails {
        intern_db_intern(order_by: {id: asc}) {
    id
    first_name
    last_name
    stipend
  }

    }
`;

export const GET_COLLEGES = gql `
    query GetCollegesDetails {
        intern_db_college(order_by: {id: asc}) {
    id
    college_name
    college_address
  }}
`;

export const GET_BRANCHES = gql `
    query GetBranchesDetails {
        intern_db_branch(order_by: {id: asc}) {
    id
    branch_name
    hod_name
    hod_contact
  }
    }
    `;

export const DEL_INTERN = gql`
  mutation DeleteIntern($id: Int!) {
    delete_intern_db_intern_by_pk(id: $id) {
      id
    }
  }
`;

export const DEL_COLLEGE = gql`
  mutation DeleteCollege($id: Int!) {
    delete_intern_db_college_by_pk(id: $id) {
      id
    }
  }
`;

export const DEL_BRANCH = gql`
  mutation DeleteBranch($id: Int!) {
    delete_intern_db_branch_by_pk(id: $id) {
      id
    }
  }
`;

export const GET_ADDRESS = gql `
    query GetAddressDetails {
      intern_db_get_adrresses {
    id
    address
    lat
    lng
  }}
`;
