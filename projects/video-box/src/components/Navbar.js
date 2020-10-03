import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageContent } from '../redux/slices/contentSlice';
import { createUseStyles, withTheme } from 'react-jss';
import { colors } from '../utilities/colors';
import githubLogo from '../images/github-logo-white.png';

const useStyles = createUseStyles({
  //! Mobile Styling
  navbarWrapper: {
    display: 'flex',
    padding: '0 16px',
    backgroundColor: colors.darkBlue,
    flexWrap: 'wrap',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    flexBasis: '100%',
    marginTop: '7px',
  },
  titleText: {
    fontFamily: 'Berkshire Swash, cursive',
    fontSize: '28px',
    color: colors.lemon,
  },
  searchWrapper: {
    display: 'flex',
    flex: 3,
    alignItems: 'center',
  },
  searchForm: {
    width: '100%',
    margin: '7px 0',
  },
  searchBar: {
    width: '75%',
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: '2px white solid',
    fontWeight: 'bold',
    height: '20px',
    fontSize: '15px',
    color: colors.lemon,
  },
  searchButton: {
    width: '17%',
    height: '24px',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '15px',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      cursor: 'pointer',
    },
  },
  repoWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  repoLogo: {
    width: '30%',
    display: 'table',
  },

  //! Tablet Styling - 768px and above
  '@media screen and (min-width: 768px)': {
    titleText: {
      fontSize: '40px',
      lineHeight: 1,
    },
    titleWrapper: {
      order: 2,
      flexBasis: 0,
      margin: '10px 0',
      flex: 1.5,
    },
    searchWrapper: {
      order: 1,
      flex: 1,
    },
    searchWrapper: {
      flex: 2,
    },
    repoWrapper: {
      order: 3,
      justifyContent: 'flex-end',
      flex: '.2',
    },
    repoLogo: {
      height: '35px',
      width: '35px',
      padding: '5px',
    },
    searchBar: {
      fontSize: '20px',
      width: '90%',
    },
    searchButton: {
      width: '10%',
      fontSize: '20px',
      height: '26px',
    },
  },
});

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const classes = useStyles();

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.titleWrapper}>
        <div className={classes.titleText}>videobox</div>
      </div>
      <div className={classes.searchWrapper}>
        <form className={classes.searchForm}>
          <input
            className={classes.searchBar}
            placeholder='Search'
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <button
            className={classes.searchButton}
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                setPageContent({ component: 'Results', data: searchQuery })
              );
            }}
            type='submit'
          >
            go
          </button>
        </form>
      </div>
      <div className={classes.repoWrapper}>
        <a
          href='https://www.github.com/rjshoemaker55'
          target='_blank'
          styles={{ display: 'table' }}
        >
          <img className={classes.repoLogo} src={githubLogo} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
