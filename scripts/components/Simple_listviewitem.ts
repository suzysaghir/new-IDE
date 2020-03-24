import Simple_listviewitemDesign from 'generated/my-components/Simple_listviewitem';

export default class Simple_listviewitem extends Simple_listviewitemDesign {
  // Constructor
    pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
        super(props);
        this.pageName = pageName;
  }
}

