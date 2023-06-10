import { gql } from '@apollo/client';

export const GET_INTERNS = gql `
    query GetInternsDetails {
        intern_db_intern {
            id
            first_name
            last_name
            stipend
        }

    }
`;

export const GET_COLLEGES = gql `
    query GetCollegesDetails {
        intern_db_college {
            id
            college_name
            college_address
        }}
`;

export const GET_BRANCHES = gql `
    query GetBranchesDetails {
        intern_db_branch {
            id
            branch_name
            hod_name
            hod_contact
        }
    }
    `;