import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import Image  from "next/image";
import NextLink from 'next/link'

export const Navbar = () => {
    
    const { theme } = useTheme();   
    return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        background: theme?.colors.gray200.value,
      }}
    >
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icono App"
            width={70}
            height={70}
        />

      <Link href="/">
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okémon</Text>
      </Link>
      
      <Spacer css={{flex: 1}}/>

      <Link style={{ marginRight: '10px'}} href="/favorites">
          <Text color="white">Favoritos</Text>
      </Link>      
    </div>
  );
};
