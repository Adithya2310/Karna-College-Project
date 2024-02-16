import React, { ReactNode } from 'react';
// import { SidebarNav } from '@/components/shared/home/sidebar/Sidebar';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}



export const ProfileContainer: React.FC<ContainerProps> = ({ children, className, style}) => {
  return (
    <div className={`relative lg:min-w-[44rem] max-w-[44rem] min-w-[100vw] mx-auto bg-[length:100px_100px] py-2 ${className} min-h-screen`} style={style}>
      {children}
    </div>
  );
};


  
export const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
      <div className={`relative max-w-10xl mx-auto px-2 w-full ${className}`}>
        {children}
      </div>
    );
};

export const NavContainer: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    
    <header className="relative z-10 max-w-[1444px] mx-auto">
        <Container>
            <nav className={`flex justify-between items-center px-2 py-2 ${className}`}>
                {children}
            </nav>
        </Container>
    </header>
  );
};

// export const SidebarContainer: React.FC<ContainerProps> = ({ children, className }) => {
//   return (
//     <>
//     <aside className=" lg:w-1/5 hidden lg:block">
//       <SidebarNav />  
//     </aside>
//     <div className='relative max-w-10xl mx-auto'>
//       {children}

//     </div>
//     </>
//   );
// }


