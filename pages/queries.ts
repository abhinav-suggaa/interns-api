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