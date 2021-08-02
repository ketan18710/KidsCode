// Api Schema handler for App Container
import { getBrandsList, commonUserDataStructure } from 'utils/common'

const schema = {
    me: {
        brands:[],
        email: null,
        firstName: null,
        lastName: null,
        id: null,
        role: null,
        permissions: null,
    }
}

const roleAndPermissionSchema = {
    roles:{

    }
}

export const structureApiResponse = userData => {
    if(!userData) return null;
    schema.me = commonUserDataStructure(userData);
    return schema.me;
}