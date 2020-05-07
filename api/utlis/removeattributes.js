module.exports = {

    removeFromAll: entity => {
        entity['_id'] = undefined;
        entity['id'] = undefined;
        entity['__v'] =  undefined;
        entity['displayDetails'] = undefined;
    },

    removeCURDDates: entity => {
        entity['createdAt'] =  undefined;
        entity['updatedAt'] =  undefined;
    },

    removeExtraOrganization:  entity => {
        org = entity['organization']
        if(org){
            org['_id'] = undefined;
            org['id'] = undefined;
            org['__v'] =  undefined;
            org['createdAt'] =  undefined;
            org['updatedAt'] =  undefined;
            org['experience'] =  undefined;
        }
    }
}