import Simple_gridviewItemDesign from 'generated/my-components/Simple_gridviewItem';

export default class Simple_gridviewItem extends Simple_gridviewItemDesign {
    // Constructor
    // Initalizes super class for this scope
    pageName?: string | undefined;
    constructor(props?: any, pageName?: string) {
        super(props);
        this.pageName = pageName;
  }
}

