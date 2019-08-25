import React from 'react';

interface NavbarContextInterface {
  isLogged: boolean;
}

export const NavbarContext = React.createContext({} as NavbarContextInterface);
export const NavbarProvider = NavbarContext.Provider;
