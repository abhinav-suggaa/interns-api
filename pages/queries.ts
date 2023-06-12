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

export const DEL_INTERN = gql `
mutation DeleteIntern {
  delete_intern_db_intern_by_pk({id : $id}) {
    id
  }
}
`;

export const DEL_COLLEGE = gql `
mutation DeleteCollege {
  delete_intern_db_college_by_pk({id : $id}) {
    id
  }
}
`;

export const DEL_BRANCH = gql `
mutation DeleteBranch {
  delete_intern_db_branch_by_pk({id : $id}) {
    id
  }
}
`;

export const UPDATE_INTERN = gql `
mutation UpdateIntern {
  update_intern_db_intern_by_pk({id : $id}, _set: {first_name: $first_name, last_name: $last_name, stipend: $stipend}) {
    id
    }
    }
    `;

export const UPDATE_COLLEGE = gql `
mutation UpdateCollege {
  update_intern_db_college_by_pk({id : $id}, _set: {college_name: $college_name, college_address: $college_address}) {
    id
    }
    }
    `;

export const UPDATE_BRANCH = gql `
mutation UpdateBranch {
  update_intern_db_branch_by_pk({id : $id}, _set: {branch_name: $branch_name, hod_name: $hod_name, hod_contact: $hod_contact}) {
    id
    }
    }
    `;
    