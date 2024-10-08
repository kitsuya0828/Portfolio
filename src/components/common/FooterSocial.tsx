import { createStyles, Group, Text, Button } from "@mantine/core";
import { SiGithub, SiQiita, SiX, SiZenn, SiBlogger } from "react-icons/si";
import { SizumeSvgComponent, HatenaSvgComponent } from "../assets/SvgIcon";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 50,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Group position="apart" className={classes.inner}>
        <Text
          variant="gradient"
          gradient={{ from: "green.9", to: "green.7", deg: 45 }}
        >
          Kitsuya Azuma
        </Text>
        <Group spacing="xs">
          <Button
            variant="subtle"
            component="a"
            href="https://github.com/kitsuya0828"
            color="green.9"
            compact
          >
            <SiGithub size="16" />
          </Button>
          <Button
            variant="subtle"
            component="a"
            href="https://twitter.com/azuma_alvin"
            color="green.9"
            compact
          >
            <SiX size="16" />
          </Button>
          <Button
            variant="subtle"
            component="a"
            href="https://qiita.com/adumaru0828"
            color="green.9"
            compact
          >
            <SiQiita size="16" />
          </Button>
          <Button
            variant="subtle"
            component="a"
            href="https://zenn.dev/alvinvin"
            color="green.9"
            compact
          >
            <SiZenn size="16" />
          </Button>
          <Button
            variant="subtle"
            component="a"
            href="https://azumaprogrammingdiary.blogspot.com/"
            color="green.9"
            compact
          >
            <SiBlogger size="16" />
          </Button>
          <Button
            variant="subtle"
            component="a"
            href="https://sizu.me/azuma_alvin"
            color="green.9"
            compact
          >
            <SizumeSvgComponent size="20" />
          </Button>
          <Button
            variant="subtle"
            component="a"
            href="https://alvinvin.hatenablog.jp"
            color="green.9"
            compact
          >
            <HatenaSvgComponent size="20" />
          </Button>
        </Group>
      </Group>
    </div>
  );
}
