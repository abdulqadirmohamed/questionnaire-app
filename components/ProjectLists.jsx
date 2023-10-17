export const ProjectsLists = {
    getProductsData() {
        return [
            {
                id: '1',
                name: 'Health',
                status: 'Deployed',
                DateModified: 'Last Sunday at 9:28 AM',
                dateDeployed: 'Last Sunday at 9:28 AM',
                submission: '3',
               
            },
            {
                id: '2',
                name: 'Education',
                status: 'Draft',
                DateModified: 'Last Sunday at 9:28 AM',
                dateDeployed: 'Last Sunday at 9:28 AM',
                submission: '4',
               
            },
            {
                id: '3',
                name: 'Garowe',
                status: 'Deployed',
                DateModified: 'Last Monday at 9:28 AM',
                dateDeployed: 'Last Monday at 9:28 AM',
                submission: '9',
               
            },
            
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

